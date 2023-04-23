FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /src
COPY ["sharp-coders-hackadev/sharp-coders-hackadev.csproj", "sharp-coders-hackadev/"]
RUN dotnet restore "sharp-coders-hackadev/sharp-coders-hackadev.csproj"
COPY . .
WORKDIR "/src/sharp-coders-hackadev"
RUN dotnet build "sharp-coders-hackadev.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "sharp-coders-hackadev.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .

# Usa porta dinãrnica do Heroku

CMD ASPNETCORE_URLS="<http://*:$PORT"> dotnet sharp-coders-hackadev.dll
