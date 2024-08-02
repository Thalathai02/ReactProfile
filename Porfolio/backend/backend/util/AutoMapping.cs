using AutoMapper;
using backend.Models;
using backend.ViewModels;

public class AutoMapping : Profile
{
    public AutoMapping()
    {
        CreateMap<TbUserViewModel, TbUser>(); // map from UserViewModel to Users

        // CreateMap<RegisterViewModel, User>(); // map from RegisterViewModel to Users
        CreateMap<TbPortfolioViewModel, TbPortfolio>();
    }
}
