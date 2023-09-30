# Playing with Open Weather API

### Setup

Clone this repo and navigate to it. 

```
touch .env
```

in the `.env` file create a variable with your OpenWeatherMap API key, it should look like this: `API_KEY=<Insert your API key here>`. Then run the following commands:

```
pip install 
python backend/main.py   
```

Navigate to http://localhost:8000/?zip_code=`<Insert zip code here>` and you will see your forecast.
