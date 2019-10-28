//add this to disable eslint warnings
module.exports = {
    chainWebpack: config => {
        config.module.rules.delete('eslint');
    }
}