# 使用官方的 Nginx 镜像作为基础镜像
FROM nginx:alpine

# 复制构建好的前端项目文件到 Nginx 默认的静态文件目录
COPY dist /usr/share/nginx/html

# 复制SSL证书文件夹
COPY ssl /etc/nginx/ssl

# 复制自定义的 Nginx 配置文件到容器中
COPY nginx.conf /etc/nginx/nginx.conf

# 暴露端口 80
EXPOSE 80

# 启动 Nginx
CMD ["nginx", "-g", "daemon off;"]