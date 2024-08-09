# 把 public 文件复制到 dist 中
cp -r public/* dist
name="./dom_shot_ext_v0.1.3"
mkdir "$name"
cp -r dist/* "./$name"
zip -q -r "./dist/$name.zip" "./$name"
rm -rf "./$name"