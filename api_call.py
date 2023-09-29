import os
import requests

from datetime import datetime
from dotenv import load_dotenv

class Forecast():
    def __init__(self, zip_code) -> None:
        load_dotenv()
        self.zip_code = str(zip_code)
        self.api_key = os.getenv('API_KEY')
        self.geocode_zip_to_coords()


    def geocode_zip_to_coords(self):
        api_call = f'http://api.openweathermap.org/geo/1.0/zip?zip={self.zip_code},US&limit=1&appid={self.api_key}'
        response = requests.get(api_call).json()
        self.lat = response['lat']
        self.lon = response['lon']
    
    def get(self):
        api_call = f'https://api.openweathermap.org/data/3.0/onecall?lat={self.lat}&lon={self.lon}&exclude=current,minutely,hourly,alerts&appid={self.api_key}'
        response = requests.get(api_call).json()
        

        for day in response['daily']:
            unix_timestamp = day['dt']
            print(f"{datetime.utcfromtimestamp(unix_timestamp).strftime('%Y-%m-%d')}\t{day['temp']['min']}/{day['temp']['max']}\t{day['rain']}")