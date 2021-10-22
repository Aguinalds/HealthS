# HealthS

- *PACOTES*

dotnet add package Microsoft.AspNetCore.Authentication

dotnet add package Microsoft.AspNetCore.Authentication.JwtBearer

dotnet add package Microsoft.EntityFrameworkCore

dotnet add package Microsoft.EntityFrameworkCore.SqlServer

dotnet add package Microsoft.EntityFrameworkCore.Design

- *NOVAS*

dotnet tool install -g dotnet-aspnet-codegenerator

dotnet add package Microsoft.VisualStudio.Web.CodeGeneration.Design

- *BANCO DE DADOS*

dotnet tool install --global dotnet-ef

dotnet ef migrations add Initial

dotnet ef database update

- *EXECUTAR O PROJETO*

dotnet watch run

- *ANGULAR*

npm install -g @angular/cli

ng new my-first-project  //Criar novo projeto (nao obrigatorio)

cd my-first-project //Cd no projeto (nao obrigatorio)

ng serve --open

 *CRIAR CONTROLLERS* (nao obrigatorio para setup)

dotnet-aspnet-codegenerator controller -name LoginController -m Login -dc Banco -api --relativeFolderPath Controllers