using backend.Models;

namespace backend.Services
{
    public interface IAuthRepository
    {
        void Register(TbUser user);

        (TbUser?, string) Login(TbUser user);


    }

}