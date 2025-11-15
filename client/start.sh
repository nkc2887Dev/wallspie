#!/bin/bash

# WallsPie Client Start Script for Railway
# This script handles Next.js startup

set -e  # Exit on error

echo "🚀 Starting WallsPie Client..."

# Print environment info
echo "📊 Environment: $NODE_ENV"
echo "🔌 Port: ${PORT:-3000}"
echo "🌐 API URL: $NEXT_PUBLIC_API_URL"

# Wait for backend API to be ready (optional)
if [ -n "$NEXT_PUBLIC_API_URL" ]; then
  echo "⏳ Waiting for backend API..."
  max_retries=30
  retry_count=0

  while [ $retry_count -lt $max_retries ]; do
    if wget --quiet --tries=1 --spider "$NEXT_PUBLIC_API_URL/api/v1/categories" 2>/dev/null; then
      echo "✅ Backend API is ready!"
      break
    fi

    retry_count=$((retry_count + 1))

    if [ $retry_count -lt $max_retries ]; then
      echo "⏳ Attempt $retry_count/$max_retries - Backend not ready, retrying in 2 seconds..."
      sleep 2
    fi
  done

  if [ $retry_count -eq $max_retries ]; then
    echo "⚠️  Backend API not responding after $max_retries attempts"
    echo "⚠️  Continuing anyway - app will retry connections..."
  fi
fi

# Start Next.js server
echo "🎯 Starting Next.js server..."
exec node server.js
