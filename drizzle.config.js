export default{
    dialect:'postgresql',
    schema:'./utils/db/schema.ts',
    out:'./drizzle',
    dbCredentials:{
        url:process.env.DB_url,
        connectionString:process.env.DB_url,
    }
}