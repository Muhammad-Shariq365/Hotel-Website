import user from '../schemas/user'
import account from '../schemas/accounts'
import booking from './booking'
import verificationToken from './verificationToken';
import hotelRoom from './hotelRoom'
import review from './review'


export const schemaTypes = [user, account, booking, hotelRoom, review, verificationToken];
