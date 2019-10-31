module.exports = {
    presets: [
        "@babel/preset-env",    // Compatibilidade do JS que o navegador ainda não interpreta
        "@babel/preset-react"  //  Compatibiliade do React que o navegador ainda não interpreta
    ],
    plugins: [
        '@babel/plugin-proposal-class-properties'
    ]
};