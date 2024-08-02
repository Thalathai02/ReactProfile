using backend.Models;

namespace backend.Services
{
    public interface IPortfolioRepository
    {
        public IEnumerable<TbPortfolio> GetTbPortfoliosAll();
        public IEnumerable<TbPortfolio> SearchPortfolio(string keyword);

    }
}
