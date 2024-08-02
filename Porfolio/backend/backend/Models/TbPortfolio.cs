using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class TbPortfolio
{
    public int Id { get; set; }

    public string? Head { get; set; }

    public string? Title { get; set; }

    public string? Subtitle { get; set; }

    public bool? IsDelete { get; set; }

    public string? Img { get; set; }

    public int? Like { get; set; }

    public int? Dislike { get; set; }
}
