import *as yup from 'yup'
export const SigInShemas=yup.object().shape({
    email: yup.string().email("lutfen geçerli bir mail giriniz.").required("e mail adresi zorunludur."),
    password: yup.string().required(" Lütfen şifre alanınını giriniz").min(8,"Şifreniz en az 8 karakterden oluşmalıdır."),
    checkPassword:yup.string().required("Lutfen şifrenizi tekrar giriniz.").oneOf([yup.ref("password",yup.password),"Şifreler uyuşmuyor."]).min(8,"Şifreniz en az 8 karakterden oluşmalıdır."),
    check:yup.boolean().required("lütfen sözleşmeyi onaylayınız."),
    name:yup.string("lütfen isminizi doğru girniz.").min(2,"En az iki karakter olarak giriniz").required("isim alanı zorunludur.")
  
}

)



/**
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * import *as yup from 'yup'
export const sıgnIn=yup.object().shape({
    name:yup.string().required("ism alanı zorunludur.").min(2,"en az iki karakter giriniz."),
    surName:yup.string().required("ism alanı zorunludur.").min(2,"en az iki karakter giriniz."),
        eposta: yup.string().required("e- posta alanı zorunludur").email("lütfen geçerli bir E-posta adresi girniz"),
    number: yup.number().typeError("lütfen numara formatinda giriniz").min(11, "lütfen numaranızı 11 hane olacak şekilde , 05xx xxx xx xx şeklinde giriniz.").required("lütfen numaranızı  doğru giriniz."),
    password: yup.string().min(8, "Şifreniz  en az karakterden oluşmalıdır.").required("lütfen şifrenizi giriniz."),
    confirmPassword: yup.string().required("Lutfen şifrenizi tekrar giriniz.").oneOf([yup.ref("password",yup.password),"Şifreler uyuşmuyor."]),
    term: yup.boolean().required("lütfen sözleşmeyi onaylayınız.")
})
 */