import os

current_directory = os.getcwd()
src_directory = os.path.join(current_directory, 'src')
items = os.listdir(src_directory)
folder=[item for item in items if os.path.isdir(os.path.join(src_directory, item))]  

md_links="\n"  

print("文件夹:", folder)  


for f in folder:
    os.system(f"cd {current_directory} & npx slidev build ./src/{f}/slides.md --base /slides/{f}/ --out ../../dist/{f}/ ")
    md_links+=f"\n## {f} \n- [vercel预览](https://slides.ALLENYGY.vip/slides/{f}) \n- [github page预览](https://ALLENYGY.github.io/slides/{f})  \n"



with open('README.md', 'r',encoding='utf-8') as file:
    ppt_content = file.read()
start_index = ppt_content.find('<!-- start -->')
end_index = ppt_content.find('<!-- end -->')
if start_index != -1 and end_index != -1:
    new_content = ppt_content[:start_index+len('<!-- start -->')+1] + f'\n{md_links}\n' + ppt_content[end_index:]
    with open('README.md', 'w',encoding='utf-8') as file:
        file.write(new_content)
else:
    print("标记未找到")  

os.system("npx marked -i README.md -o ./dist/index.html" )

with open('dist/index.html', 'r', encoding='utf-8') as f:
    original_content = f.read()


new_content = """
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ALLENYGY's Slides</title>
    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/5.5.1/github-markdown-light.min.css'>
</head>
<body>
<div class="markdown-body" style="padding: 5% 20%;">
""" + original_content + """
</div>
</body>
</html>
"""


with open('dist/index.html', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Created successfully!")