import bcrypt from 'bcrypt';

export const Hash = {
     hash:(data) => bcrypt.hashSync(data, Number(process.env.HASH_SALT)) , 
     compare:(data, hash) => bcrypt.compareSync(data, hash)
}