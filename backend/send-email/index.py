import json
import smtplib
import os
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from typing import Dict, Any
import time

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: Отправка заявок с сайта на email
    Args: event - dict with httpMethod, body, queryStringParameters
          context - object with attributes: request_id, function_name
    Returns: HTTP response dict
    '''
    method: str = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }
    
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Method not allowed'})
        }
    
    body_data = json.loads(event.get('body', '{}'))
    
    name = body_data.get('name', '')
    phone = body_data.get('phone', '')
    message = body_data.get('message', '')
    
    if not name or not phone:
        return {
            'statusCode': 400,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Имя и телефон обязательны'})
        }
    
    smtp_host = 'smtp.yandex.ru'
    smtp_port = 465
    smtp_user = os.environ.get('SMTP_USER')
    smtp_password = os.environ.get('SMTP_PASSWORD')
    email_to = os.environ.get('EMAIL_TO')
    
    print(f"DEBUG: smtp_user='{smtp_user}', has_password={bool(smtp_password)}, email_to='{email_to}'")
    
    if not smtp_user or not smtp_password or not email_to:
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Настройки email не заданы'})
        }
    
    msg = MIMEMultipart('alternative')
    msg['Subject'] = f'Новая заявка с сайта от {name}'
    msg['From'] = smtp_user
    msg['To'] = email_to
    
    html_body = f'''
    <html>
      <body style="font-family: Arial, sans-serif;">
        <h2 style="color: #333;">Новая заявка с сайта Таксопарк 74/18</h2>
        <div style="background: #f5f5f5; padding: 20px; border-radius: 5px;">
          <p><strong>Имя:</strong> {name}</p>
          <p><strong>Телефон:</strong> {phone}</p>
          <p><strong>Сообщение:</strong> {message if message else 'Не указано'}</p>
        </div>
      </body>
    </html>
    '''
    
    html_part = MIMEText(html_body, 'html')
    msg.attach(html_part)
    
    server = smtplib.SMTP_SSL(smtp_host, smtp_port)
    server.login(smtp_user, smtp_password)
    server.send_message(msg)
    server.quit()
    
    return {
        'statusCode': 200,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        'isBase64Encoded': False,
        'body': json.dumps({'success': True, 'message': 'Заявка отправлена'})
    }