FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS base
WORKDIR /app

FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /src
COPY *.csproj ./
RUN dotnet restore
COPY . ./

RUN dotnet build

FROM build AS publish
RUN dotnet publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .

# Usa porta dinãrnica do Heroku

CMD ASPNETCORE_URLS="<http://*:$PORT"> dotnet sharp-coders-hackadev.dll
