require('dotenv').config();

exports.mysql_data = {
    host: process.env.HOST_NAME,
    user: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    insecureAuth: true
};

exports.secret = {
    secret: process.env.SECRET
};

exports.typingDna = {
    typingDna_apiKey: process.env.TYPINGDNA_APIKEY,
    typingDna_secret: process.env.TYPINGDNA_APISECRET
};

exports.anvil = {
    apiKey: process.env.ANVIL_APIKEY,
    bill_of_sale_id: process.env.ANVIL_BILLOFSALE_ID,
    title_id: process.env.ANVIL_TITLE_ID
};

exports.cloudinary = {
    cloud_name: process.env.CLOUD_NAME,
    apikey: process.env.CLOUD_APIKEY,
    secret: process.env.CLOUD_SECRET
}