import os
import requests

from datetime import datetime
from dotenv import load_dotenv

class Forecast():
    def __init__(self, ) -> None:
        load_dotenv()
        self.api_key = os.getenv('API_KEY')

    def geocode_zip_to_coords(self, zip_code):
        api_call = f'http://api.openweathermap.org/geo/1.0/zip?zip={zip_code},US&limit=1&appid={self.api_key}'
        response = requests.get(api_call).json()
        lat = response['lat']
        lon = response['lon']
        return lat, lon
    
    def get(self, zip_code, days=5):
        lat, lon = self.geocode_zip_to_coords(zip_code)

        api_call = f'https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude=current,minutely,hourly,alerts&appid={self.api_key}'
        response = requests.get(api_call).json()

        result = []

        for i in range(days):
            day = response['daily'][i]
            unix_timestamp = day['dt']
            # Rain check
            if 'rain' not in day.keys():
                rain = 0
            else:
                rain = day['rain']

            result.append({
                'date': datetime.utcfromtimestamp(unix_timestamp).strftime('%Y-%m-%d'),
                'tmin': day['temp']['min'],
                'tmax': day['temp']['max'],
                'rain': rain
            })

            # print(f"{datetime.utcfromtimestamp(unix_timestamp).strftime('%Y-%m-%d')}\t{day['temp']['min']}/{day['temp']['max']}\t{rain}")

        return {'forecast': result}