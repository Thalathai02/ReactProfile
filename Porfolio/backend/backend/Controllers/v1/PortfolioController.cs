
using AutoMapper;
using backend.Models;
using backend.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
namespace backend.Controllers.v1
{

    [Route("api/v1/[controller]")]
    [ApiController]
    public class PortfolioController : ControllerBase
    {

        public PortfolioController(IPortfolioRepository portfolioRepository, IMapper mapper)
        {
            PortfolioRepository = portfolioRepository;
            Mapper = mapper;
        }

        public IPortfolioRepository PortfolioRepository { get; }
        public IMapper Mapper { get; }

        [HttpGet]
        public IActionResult GetTbPortfolios()
        {
            try
            {

                var result = PortfolioRepository.GetTbPortfoliosAll();

                return Ok(result);
            }
            catch (Exception error)
            {
                return StatusCode(500, new { message = error });
            }
        }
        [HttpGet("search/name/")]
        public IActionResult SearchPortfolio([FromQuery] string keyword)
        {
            try
            {
                var result = PortfolioRepository.SearchPortfolio(keyword);
                return Ok(result);
            }
            catch (Exception error)
            {
                // _logger.LogError($"Log SearchProducts: {error}");
                return StatusCode(500, new { message = error });
            }
        }
        [AllowAnonymous]
        [HttpGet("images/{name}")]
        public IActionResult ProductImage(string name)
        {
            return File($"~/images/{name}", "image/jpg");
        }

    }
}