---
# try also 'default' to start simple
theme: seriph
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://cover.sli.dev
# some information about your slides, markdown enabled
title: AlphaFold2
# apply any unocss classes to the current slide
# class: text-center
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# https://sli.dev/guide/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations#slide-transitions
transition: slide-left
# enable MDC Syntax: https://sli.dev/guide/syntax#mdc-syntax
mdc: true
---

# [AlphaFold2](https://www.nature.com/articles/s41586-021-03819-2)

---

## [[alphafold2]]

- [[alphafold2]] 被 *《Science》* 评选为2021年AI在科学界最大的突破
- [[alphafold2]] 把通过氨基酸序列对蛋白质三维结构预测的误差，降低到原子级别

---

## Model Architecture

![Model architecture](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/Research/AlphaFold/e.png)

- *Feature Extraction*
- *Encoder*
- *Decoder*
- *Recycling*
  
---

## Feature Extraction

### MSA *(Multi-Sequence-Alignment)*

- 在基因数据库中搜索相似的氨基酸序列
	- 多序列比对
- 得到不同氨基酸序列的特征
- MSA的作用是为了提取出一个a序列在多物种中的共进化信息

<img src="https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/Research/AlphaFold/FeatureExtraction.png" alt="FeatureExtraction" style="zoom:50%;"  align="right"/>

---
transition: slide-up
---

## Feature Extraction

### Pairing & Templates

- 氨基酸之间的关系
- 在结构数据库中搜索，从已知的氨基酸序列的结构中搜索得到空间信息
- 氨基酸之间的特征

<img src="https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/Research/AlphaFold/FeatureExtraction.png" alt="FeatureExtraction" style="zoom:50%;"  align="right"/>

---

### Encoder

#### Encoder Input

**MSA Representation**

- *s*: *s* 行氨基酸序列
	- 第一行是人的氨基酸序列
	- 后面*s-1* 是从基因数据库中匹配到的不同物种的氨基酸序列
- *r*: *r*个氨基酸
- *c*:  每个氨基酸表示为长为*c*的向量

<img src="https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/Research/AlphaFold/EncoderInput.png" alt="EncoderInput.png" style="zoom:30%;" align="right"/>

---
transition: slide-up
---

### Encoder

#### Encoder Input

**Pair Representation**

- *r*: *r*个氨基酸
- *c*: 每个氨基酸表示为长为*c*的向量
- 主要用于表示氨基酸两两之间的空间信息

<img src="https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/Research/AlphaFold/EncoderInput.png" alt="EncoderInput.png" style="zoom:40%;" align="right"/>

---

### Encoder

#### Evoformer Block

- 与Transformer 不同
	- Transformer 输入的是一段序列
	- Evoformer 在这里输入的是一个二维的矩阵

![a](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/Research/AlphaFold/a.png)

---
transition: slide-up
---

### Encoder

#### Evoformer Block

*MSA*和*Pair*都会进入多头自注意力模块

- 具有残差连接和在元素作用上的MLP

*Pair*的部分还需要加入物理上三角不等式的处理

![a](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/Research/AlphaFold/a.png)

---
transition: slide-up
---

### Encoder

#### Evoformer Block

**与Transformer不同**

- 氨基酸对 *(Pair Representation)* 之间的信息会加入对序列的建模
	- 序列建模之后也会加入对氨基酸对的建模
	- 自注意力机制做两次
		- 因为输入是一个二维的矩阵

![a](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/Research/AlphaFold/a.png)

---

### Encoder

#### Encoder Output

- 输出的矩阵维度不发生变化, *c*发生变化

<img src="https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/Research/AlphaFold/EncoderOutput.png" alt="EncoderOutput.png" style="zoom:50%;" align="right"/>

---

## Decoder

根据*Encoder*的输出拿到

- Single Representation *(r, c)* 人氨基酸序列
	- 人类氨基酸所有的特征的表示
- Pair Representation *(r, r, c)* 氨基酸对
	- 氨基酸之间的相关信息
- Backbone frames
	- 氨基酸序列主干的空间结构

<img src="https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/Research/Decoder/Decoder.png" alt="Decoder" style="zoom:50%;" />

---

### Protein 3D Structure Prediction

记录下一个氨基酸与上一个氨基酸的相对位置

- R基部分原子的旋转的角度
	- 欧几里得变换
	- $y=Ax+B,\ A\in R^{3}$
	- 极性，电荷可以限制 *A, B* 值
- 先预测*backbone*上氨基酸的相对位置
- 再预测每个氨基酸R基上的原子的相对位置
  <img src="https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/Research/AlphaFold/ProteinPrediction.png" alt="ProteinPrediction" style="zoom: 50%;" />

---

## Recycling

把编码器的输出和解码器的输出通过回收机制传回编码器的输入

- 类似RNN，但是这里的梯度不反传, 只经过56层就可以计算梯度

![Model architecture](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/Research/AlphaFold/e.png)

---

## Loss Function

*Training*

- $\mathcal{L} = 0.5L_{FAPE} + 0.5L_{aux} + 0.3L_{dist} + 2.0L_{msa} + 0.01L_{conf}$

$L_{FAPE}$  

- 特征对齐损失，用于量化模型预测的原子位置与实际原子位置之间的差异。

$L_{aux}$

- 辅助损失，它可能与多个预测任务相关，例如二级结构预测、溶剂可及性预测等。

$L_{dist}$

- 距离损失，它衡量模型预测的残基间距离与真实结构之间的误差。

---
transition: slide-up
---

## Loss Function

*Training*

- $\mathcal{L} = 0.5L_{FAPE} + 0.5L_{aux} + 0.3L_{dist} + 2.0L_{msa} + 0.01L_{conf}$

$L_{msa}$

- 多序列比对损失，用于确保模型预测与进化信息一致。

$L_{conf}$

- 构象损失，用于确保整体蛋白质构象的准确性。

---
transition: slide-up
---

## Loss Function

*Fine-tuning*

- $\mathcal{L}= 0.5L_{FAPE} + 0.5L_{aux} + 0.3L_{dist} + 2.0L_{msa} + 0.01L_{conf} + 0.01L_{exp\_resolved} + 1.0L_{viol}$
  
$L_{exp\_resolved}$

- 用于处理实验解析度的损失，用于在蛋白质结构中考虑到实验数据的不确定性。

$L_{viol}$

- 违反物理或生物化学约束的损失。

---

## Training with labelled and unlabelled data

---

### Noisy student self-distillation

先在有标号的数据集*PDB*里训练一个模型, 通过这个模型预测没有标号的数据形成一个大一些的数据集，然后选择置信度较高的数据，加上原来有标号的数据，训练新的模型

- Using an approach similar to *noisy student self-distillation*.
- In this procedure, we use a trained network to predict the structure of around 350,000 diverse sequences from `Uniclust3036` and *make a new dataset* of predicted structures filtered to a high-confidence subset.

---
transition: slide-up
---

### BERT

随机遮住或更改一些氨基酸，然后用类似Bert的方法预测氨基酸

- Additionally, we randomly **mask** out or **mutate** individual residues within the MSA  have a Bidirectional Encoder Representations from Transformers *BERT* to predict the masked elements of the MSA sequences.

---

# [Transformer](https://arxiv.org/abs/1706.03762)
