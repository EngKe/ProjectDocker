
db = db.getSiblingDB('stajdb');

db.createCollection('iller');
db.createCollection('ulkeler');

db.iller.insertMany([
    {"il": "izmir", "nufus":"4.5m", "ilceler": ["konak", "karsiyaka"],"index":1},
    {"il": "istanbul", "nufus":"15.84m", "ilceler": ["kadikoy", "sariyer"],"index":2},
    {"il": "amsterdam", "nufus":"0.82m", "ilceler": ["oost", "westpoort"],"index":3},
    {"il": "paris", "nufus":"2.1m", "ilceler": ["louvre", "temple"],"index":4},
    {"il": "londra", "nufus":"8.9m", "ilceler": ["westminster", "lambeth"],"index":5},
    {"il": "madrid", "nufus":"3.2m", "ilceler": ["centro", "arganzuela"],"index":6},
    {"il": "antalya", "nufus":"2.6m", "ilceler": ["manavgat", "konyaalti"],"index":7},
    {"il": "viyana", "nufus":"2m", "ilceler": ["wieden", "leopoldstadt"],"index":8},
    {"il": "lizbon", "nufus":"0.5m", "ilceler": ["amadora", "cadaval"],"index":9},
    {"il": "new york", "nufus":"8.5m", "ilceler": ["brooklyn", "queens"],"index":10}
]);
db.ulkeler.insertMany([
    {"ulke": "turkiye", "nufus": "84.34m", "baskent": "ankara","index":1},
    {"ulke": "almanya", "nufus": "83.24m", "baskent": "berlin","index":2},
    {"ulke": "hollanda", "nufus": "17.44m", "baskent": "amsterdam","index":3},
    {"ulke": "fransa", "nufus": "67.39m", "baskent": "paris","index":4},
    {"ulke": "ispanya", "nufus": "47.35m", "baskent": "madrid","index":5},
    {"ulke": "ingiltere", "nufus": "55.98m", "baskent": "londra","index":6},
    {"ulke": "amerika", "nufus": "329.5m", "baskent": "washington","index":7},
    {"ulke": "italya", "nufus": "59.55m", "baskent": "roma","index":8},
    {"ulke": "brezilya", "nufus": "212.6", "baskent": "brazilya","index":9},
    {"ulke": "japonya", "nufus": "125.8m", "baskent": "tokyo","index":10}
]);


