#!/bin/bash

# WallsPie Server Start Script for Railway
# This script handles database migrations and server startup

set -e  # Exit on error

echo "🚀 Starting WallsPie Server..."

# Print environment info
echo "📊 Environment: $NODE_ENV"
echo "🔌 Port: $PORT"

# Wait for database to be ready
echo "⏳ Waiting for database connection..."
max_retries=30
retry_count=0

while [ $retry_count -lt $max_retries ]; do
  if node -e "
    const mysql = require('mysql2/promise');
    const url = process.env.DATABASE_URL || process.env.DB_PUBLIC_URL;
    if (url) {
      mysql.createConnection(url)
        .then(() => { console.log('Connected'); process.exit(0); })
        .catch(() => process.exit(1));
    } else {
      mysql.createConnection({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
      })
        .then(() => { console.log('Connected'); process.exit(0); })
        .catch(() => process.exit(1));
    }
  " 2>/dev/null; then
    echo "✅ Database connected successfully!"
    break
  fi

  retry_count=$((retry_count + 1))
  echo "⏳ Attempt $retry_count/$max_retries - Retrying in 2 seconds..."
  sleep 2
done

if [ $retry_count -eq $max_retries ]; then
  echo "❌ Failed to connect to database after $max_retries attempts"
  exit 1
fi

# Run database migrations (if you have a migration script)
# Uncomment if you add migrations
# echo "🔄 Running database migrations..."
# npm run migrate

# Start the server
echo "🎯 Starting Express server..."
exec node dist/index.js
