namespace Metadata.Extensions;

public static class ConfigurationExtensions
{
    private const string ConfigurationFolder = "Configuration";
    private const string LoggingConfig = "logging.json";
    
    public static IConfigurationBuilder AddServiceConfiguration(this IConfigurationBuilder configuration)
    {
        configuration.SetBasePath(Path.Combine(AppContext.BaseDirectory, ConfigurationFolder));
        
        configuration.AddJsonFile(LoggingConfig, false, true);
        
        configuration.AddEnvironmentVariables();

        configuration.AddUserSecrets<Program>();
        
        return configuration;
    }
    
    public static TConfiguration LoadConfigurationFromConfig<TConfiguration>(this IServiceCollection services, IConfiguration configuration, string sectionName)
        where TConfiguration : class
    {
        var instance = configuration.GetSection(sectionName).Get<TConfiguration>();
        
        ArgumentNullException.ThrowIfNull(instance, nameof(instance));

        services.TryAddSingleton(instance);

        return instance;
    }
    
    public static TConfiguration LoadConfigurationFromEnv<TConfiguration>(this IServiceCollection services)
        where TConfiguration : class
    {
        var instance = Activator.CreateInstance<TConfiguration>();
        
        ArgumentNullException.ThrowIfNull(instance, nameof(instance));

        services.TryAddSingleton(instance);

        return instance;
    }
}