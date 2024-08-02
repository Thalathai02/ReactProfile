using System.Linq;
using backend.Database;
using backend.Models;
using System;
using System.Security.Cryptography;
using Microsoft.AspNetCore.Cryptography.KeyDerivation;
using System.Security.Claims;
using Microsoft.Extensions.Configuration;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using backend.Installers;
using Microsoft.EntityFrameworkCore;

namespace backend.Services
{
    public class PortfolioRepository : IPortfolioRepository
    {

        private readonly DatabaseContext _context;


        public PortfolioRepository(DatabaseContext context)
        {
            _context = context;
        }
        public IEnumerable<TbPortfolio> GetTbPortfoliosAll()
        {
            IEnumerable<TbPortfolio> getData = _context.TbPortfolios.ToList();
            return getData;

        }
        public IEnumerable<TbPortfolio> SearchPortfolio(string keyword)
        {
            return (from product in _context.TbPortfolios
                    where EF.Functions.Like(product.Head, "%" + keyword + "%")
                    select product).ToList();
        }
    }

}
