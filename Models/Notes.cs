using Microsoft.AspNetCore.Identity;

namespace sharp_coders_hackadev.Models;

public class Notes
{
    public int Id { get; set; }
    public string? Title { get; set; }
    public string? Content { get; set; }
}
