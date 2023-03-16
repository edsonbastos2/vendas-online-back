/* eslint-disable prettier/prettier */
import { LoginPayloadDto } from 'src/auth/dtos/loginPayload.dto';

export const authorizationToLoginPayload = (
  authoziation: string,
): LoginPayloadDto | undefined=> {
    const authorizationSplited = authoziation.split('.')

    if(authorizationSplited.length < 3 || !authorizationSplited[1]) {
        return undefined
    }

    return JSON.parse(Buffer.from(authorizationSplited[1], 'base64').toString('ascii'))
};
