export const USER_NAME_MIN_LENGTH = 5
export const USER_NAME_MIN_ERROR = '5글자 이상 입력해주세요.'

export const EMAIL_ENDS_WITH = '@zod.com'
export const EMAIL_ERROR = 'zod.com 이메일만 가능합니다.'

export const PASSWORD_MIN_LENGTH = 10
export const PASSWORD_REGEX = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[#?!@$%^&*-]).+$')
export const PASSWORD_LENGTH_ERROR = '10자리 이상 입력해주세요.'
export const PASSWORD_REGEX_ERROR = '1개 이상의 숫자를 포함해야합니다.'
