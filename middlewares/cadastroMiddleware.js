const {check} = require('express-validator')
const validateRegister = [
    check('nome')
    .notEmpty().withMessage('Deve ser preenchido').bail()
    .isLength({min: 3})
    .withMessage('Deve preencher o nome com no minímo 3 caracteres'),

    check('email')
    .notEmpty().withMessage('Deve ser preenchido').bail()
    .isEmail().withMessage('Deve inserir um email válido'),

    check('senha').notEmpty().withMessage('Deve ser preenchido').bail()
    .isLength({min: 8}).withMessage('A senha deve ter no minímo 8 caracteres')


]

module.exports = validateRegister