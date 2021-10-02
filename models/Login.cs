namespace models
{
    public class Login
    {
        public int Id { get; set; }

        public string User { get; set; }

        public string Senha { get; set; }

        public string Cargo { get; set; }
    }
}

//dotnet-aspnet-codegenerator controller -name LoginController -m Login -dc Banco -api --relativeFolderPath Controllers