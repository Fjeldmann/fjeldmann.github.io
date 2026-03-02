FROM ruby:3.3-bookworm

WORKDIR /srv/jekyll

# Build Jekyll dependencies into the image for faster startup.
COPY Gemfile Gemfile.lock ./
RUN bundle install

COPY . .

EXPOSE 4000 35729

CMD ["bundle", "exec", "jekyll", "serve", "--host", "0.0.0.0", "--port", "4000", "--livereload", "--force_polling"]
