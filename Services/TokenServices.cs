using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using HealthStar;
using Microsoft.IdentityModel.Tokens;
using models;

namespace Services
{
    public static class TokenService
    {
        public static string GerarToken(Login login)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var appKey = Encoding.ASCII.GetBytes(AppKey.Key);
            var tokenDescriptor =
                new SecurityTokenDescriptor {
                    Subject =
                        new ClaimsIdentity(new Claim[] {
                                new Claim(ClaimTypes.Name,
                                    login.User.ToString()),
                                new Claim(ClaimTypes.Role,
                                    login.Cargo.ToString())
                            }),
                    Expires = DateTime.UtcNow.AddHours(2),
                    SigningCredentials =
                        new SigningCredentials(new SymmetricSecurityKey(appKey),
                            SecurityAlgorithms.HmacSha256Signature)
                };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }
    }
}
