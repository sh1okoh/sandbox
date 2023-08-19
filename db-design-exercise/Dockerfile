FROM ruby:3.0

# 必要なライブラリのインストール
RUN apt-get update -qq && apt-get install -y nodejs default-mysql-client

# 作業ディレクトリの作成
RUN mkdir /workdir
WORKDIR /workdir

# gem 'bundler' のインストール
RUN gem install bundler

# Gemfile と Gemfile.lock をコピー
COPY myapp/Gemfile /workdir/Gemfile
COPY myapp/Gemfile.lock /workdir/Gemfile.lock

# Gem のインストール
RUN bundle install