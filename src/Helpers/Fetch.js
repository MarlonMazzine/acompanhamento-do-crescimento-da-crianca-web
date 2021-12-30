import React from 'react'

export default class Fetch extends React.Component {
    async getFetchResponse(url, configurations) {
        return await fetch(
            url, configurations
        ).then(async (response) => {
            const responseStatus = response.status;

            if (response.ok) {
                return response
            } else if (responseStatus === 404) {
                throw new Error('Não encontrou a url.')
            } else if (responseStatus === 400) {
                throw new Error(await response.text());
            }

            throw new Error(response.statusText)
        }).catch(erro => {
            const errorMessage = erro.message

            if (errorMessage.includes('Failed to fetch')) {
                return ''
            }
            
            throw new Error('Houve um erro inesperado. Detalhes do erro: ' + errorMessage)
        })
    }
}