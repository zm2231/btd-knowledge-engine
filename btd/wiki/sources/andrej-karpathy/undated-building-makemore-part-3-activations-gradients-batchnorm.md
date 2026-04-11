---
title: "Building makemore Part 3: Activations & Gradients, BatchNorm"
creator: andrej-karpathy
platform: youtube
date: undated
url: "https://www.youtube.com/watch?v=P6sfmUTpUmc"
---

# Building makemore Part 3: Activations & Gradients, BatchNorm

Shifts focus from architecture to training dynamics — specifically why deep networks are hard to optimize. Karpathy visualizes activation distributions and gradient flow through the MLP, showing how saturated tanh activations kill gradients and how initialization choices cause early training to stall. Introduces batch normalization as a fix, deriving it from first principles. The video connects historical context (why RNNs failed, why residual networks worked) to the concrete mechanics you can see in the training curves.

## Key Ideas
- Gradient flow through tanh saturates badly when pre-activations are too large or too small — the network effectively stops learning in those regions
- Careful weight initialization (e.g., scaling down output layer weights) can dramatically improve early training dynamics at zero extra cost
- Batch normalization standardizes layer inputs to zero mean and unit variance during training, keeping activations in the linear regime of the nonlinearity
- Visualizing activation and gradient histograms during training is a diagnostic skill that reveals problems invisible in the loss curve
- The history of neural network architectures (Highway nets, ResNets) is largely a history of solving the gradient flow problem in increasingly elegant ways

## Concepts
[[backpropagation]], [[building-from-scratch]], [[how-llms-work]]

## Creator
[[andrej-karpathy]]
