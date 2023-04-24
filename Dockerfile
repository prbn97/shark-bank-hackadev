# FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS base
# WORKDIR /app

# FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
# WORKDIR /src
# COPY *.csproj ./
# RUN dotnet restore
# COPY . ./

# RUN dotnet build

# FROM build AS publish
# RUN dotnet publish

# FROM base AS final
# WORKDIR /app
# COPY --from=publish /app/publish .

# # Usa porta dinãrnica do Heroku

# CMD ASPNETCORE_URLS="<http://*:$PORT"> dotnet sharp-coders-hackadev.dll

# Start with a base image containing .NET runtime
FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS base
WORKDIR /app
EXPOSE 80

# Build the app
FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /src
COPY ["sharp-coders-hackadev.csproj", "./"]
RUN dotnet restore
COPY . ./
WORKDIR "/src/."
RUN npm install
RUN dotnet build "sharp-coders-hackadev.csproj"

# Publish the app
FROM build AS publish
RUN dotnet publish "sharp-coders-hackadev.csproj" -c Release -o /app/publish

# Final stage / image
FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
CMD ASPNETCORE_URLS="<http://*:$PORT"> dotnet sharp-coders-hackadev.dll