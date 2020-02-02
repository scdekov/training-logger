var API_URL = '';

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    API_URL = 'http://localhost:8000';
} else {
    API_URL = '';
}

export {
    API_URL
};
