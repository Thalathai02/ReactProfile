using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Http;

namespace backend.ViewModels
{
    public class TbPortfolioViewModel
    {
          public int Id { get; set; }

    public string? Head { get; set; }

    public string? Title { get; set; }

    public string? Subtitle { get; set; }

    public bool? IsDelete { get; set; }
    }
}