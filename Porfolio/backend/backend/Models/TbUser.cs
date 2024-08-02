using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class TbUser
{
    public int Id { get; set; }

    public string? Username { get; set; }

    public string? Password { get; set; }

    public DateTime? Created { get; set; }
}
