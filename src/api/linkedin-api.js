// Configuração da API do LinkedIn
const LINKEDIN_API_CONFIG = {
    clientId: '77tbvvuo816fi1',
    clientSecret: 'WPL_AP1.9bM36BbGIiB3HCvZ.umNZGA==',
    redirectUri: 'http://localhost:3000/callback',
    scope: ['openid', 'profile']
};

// Função para autenticar com o LinkedIn
async function authenticateLinkedIn() {
    try {
        const authUrl = new URL('https://www.linkedin.com/oauth/v2/authorization');
        authUrl.searchParams.append('response_type', 'code');
        authUrl.searchParams.append('client_id', LINKEDIN_API_CONFIG.clientId);
        authUrl.searchParams.append('redirect_uri', LINKEDIN_API_CONFIG.redirectUri);
        authUrl.searchParams.append('scope', LINKEDIN_API_CONFIG.scope.join(' '));
        
        console.log('URL de autenticação:', authUrl.toString());
        window.location.href = authUrl.toString();
    } catch (error) {
        console.error('Erro ao autenticar:', error);
    }
}

// Função para obter o token de acesso
async function getAccessToken(code) {
    try {
        const tokenUrl = 'https://www.linkedin.com/oauth/v2/accessToken';
        const response = await fetch(tokenUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                grant_type: 'authorization_code',
                code: code,
                redirect_uri: LINKEDIN_API_CONFIG.redirectUri,
                client_id: LINKEDIN_API_CONFIG.clientId,
                client_secret: LINKEDIN_API_CONFIG.clientSecret,
            }),
        });
        const data = await response.json();
        console.log('Resposta do token:', data);
        return data;
    } catch (error) {
        console.error('Erro ao obter token:', error);
        throw error;
    }
}

// Função para obter dados do perfil
async function getProfileData(accessToken) {
    try {
        // Usando o endpoint v2 do LinkedIn com OpenID Connect
        const profileUrl = 'https://api.linkedin.com/v2/me?projection=(id,localizedFirstName,localizedLastName)';
        const response = await fetch(profileUrl, {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
            },
        });
        const data = await response.json();
        console.log('Dados do perfil:', data);
        return data;
    } catch (error) {
        console.error('Erro ao obter dados do perfil:', error);
        throw error;
    }
}

// Função para atualizar o config.js com os dados do LinkedIn
async function updateConfigWithLinkedInData(profileData) {
    try {
        console.log('Atualizando configuração com dados:', profileData);
        // Aqui você pode implementar a lógica para atualizar o config.js
        // com os dados obtidos do LinkedIn
    } catch (error) {
        console.error('Erro ao atualizar configuração:', error);
        throw error;
    }
}

export {
    authenticateLinkedIn,
    getAccessToken,
    getProfileData,
    updateConfigWithLinkedInData
}; 