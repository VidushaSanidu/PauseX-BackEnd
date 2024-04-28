import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { authConfig } from '../common/configure/auth.config';
//import { AuthService } from "./auth.service";

@Injectable()
export class JWTStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: authConfig().secret,
    });
  }
  async validate(payload: PayloadType) {
    //1.
    return {
      userId: payload.userId,
      email: payload.email,
      artistId: payload.artistId, // 2 };
    };
  }
}
