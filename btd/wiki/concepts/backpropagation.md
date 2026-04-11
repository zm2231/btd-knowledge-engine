---
title: Backpropagation
source_count: 5
last_updated: 2026-04-10
sources:
  - andrej-karpathy/undated-the-spelled-out-intro-to-neural-networks-and-backpropagation-building-micrograd
  - 3blue1brown/20171103-backpropagation-calculus-deep-learning-chapter-4
  - 3blue1brown/20171016-gradient-descent-how-neural-networks-learn-deep-learning-chapter-2
  - 3blue1brown/undated-but-what-is-a-neural-network-deep-learning-chapter-1
  - repos/micrograd
---

# Backpropagation

Backpropagation is the algorithm that makes neural networks learn. You run an input through the network, see how wrong the answer was, and then work backwards through every single calculation to figure out how each weight contributed to that mistake. Then you nudge all the weights in the direction that reduces the error. Repeat millions of times. That's training. If you've ever wondered what actually happens when a model "learns" — this is it. For builders, you'll rarely implement it yourself (PyTorch and every other framework handle it automatically), but understanding it changes how you think about fine-tuning, loss functions, and why some architectures are easier to train than others.

## The Core Idea: Blame Assignment

Imagine a network made an error. The question backpropagation answers is: which weights are most responsible for that error, and in which direction should each one change?

The answer comes from calculus — specifically the chain rule. Every computation in a neural network is just arithmetic: multiplications, additions, activations. The chain rule lets you trace how a small change to any weight would ripple forward through all those operations to change the final output. Backpropagation does this efficiently by starting at the end (the loss) and working backward, reusing computations rather than recalculating from scratch for each weight.

Karpathy's key line: "backpropagation is just a recursive application of the chain rule backwards through the computation graph." That's the whole algorithm.

## Computation Graphs

The cleanest way to understand backpropagation is through computation graphs. Each operation (add, multiply, tanh, etc.) is a node. The graph shows how data flows from inputs through operations to the final loss value.

Each node has two passes:
- **Forward pass**: compute the output given the inputs
- **Backward pass**: given how much the output mattered to the final loss (its gradient), compute how much each input mattered

Simple nodes have simple backward rules. A multiply node: each input's gradient is the other input times the outgoing gradient. An add node: both inputs get the same gradient passed through. These local rules chain together across the entire network.

Karpathy's micrograd (`repos/micrograd`) builds this from scratch in ~100 lines of Python. A `Value` object wraps a scalar, tracks what operation produced it, and implements a `backward()` method for each operation type. By the end you have a working automatic differentiation engine — the core of PyTorch, in miniature.

## Gradients and Learning

The gradient of the loss with respect to a weight tells you two things: the direction to move the weight (the sign) and roughly how sensitive the loss is to that weight (the magnitude). A weight with a large positive gradient: increasing it increases the loss, so you decrease it. A small gradient: this weight doesn't matter much right now.

The learning rule is simple:
```
weight = weight - learning_rate * gradient
```

This is gradient descent. Backpropagation computes the gradients. Gradient descent uses them. They're two separate things that work together.

## Why This Matters for Building

You won't implement backprop manually — but you'll see its effects constantly:

- **Loss curves**: a loss that stops decreasing often means gradients have become too small (vanishing) or too large (exploding). Architecture choices like residual connections and layer normalization exist specifically to keep gradients well-behaved during training.
- **Learning rate**: too high and gradient steps overshoot; too low and training is painfully slow. This is the most important hyperparameter you'll tune when fine-tuning models.
- **Fine-tuning**: when you fine-tune a model, you're running backprop on your dataset against the pretrained weights. LoRA and other parameter-efficient methods work by limiting which weights receive gradient updates.
- **Why some layers freeze**: freezing a layer means setting its gradients to zero — it receives no updates. You do this to preserve capabilities you don't want to overwrite.

## At Different Levels

**Pre-beginner**: a neural network learns by making a guess, seeing how wrong it was, and adjusting. Backpropagation is the method for figuring out exactly how much each part of the network contributed to the mistake, so you know what to adjust. 3Blue1Brown's "But what is a neural network?" and "Gradient descent, how neural networks learn" (Chapters 1 and 2) are the right starting point — no math required.

**Beginner**: 3Blue1Brown's "Backpropagation calculus" (Chapter 4) shows the chain rule in action on a small network. Then watch Karpathy's "Building micrograd" video — he starts from scratch, builds a tiny autograd engine, and by the end trains a neural network. By the time he's done you understand not just what backprop is but how PyTorch implements it internally.

**Builder**: clone `repos/micrograd` and read the ~100-line `engine.py`. Every operation implements `_backward()` — walk through `__mul__` and `__add__` and trace how gradients flow. Then open PyTorch and notice how `tensor.backward()` is the same idea at scale. When you fine-tune a model, look at the learning rate schedule and understand why warmup exists (early gradient estimates are noisy). When you see NaN loss, think about gradient explosion first.

## When to Surface

Show this page to users who:
- Are on the [[building-from-scratch]] path and approaching the micrograd section
- Have `calibrated_level: beginner` or above and want to understand what "training" actually means
- Are troubleshooting fine-tuning runs and seeing loss issues (not converging, NaN loss, very slow learning)
- Are curious about the difference between inference and training, or about why training is so much more expensive than inference

## Related Concepts
- [[how-llms-work]] — pre-training is backpropagation running at massive scale across the internet corpus
- [[building-from-scratch]] — micrograd is Karpathy's from-scratch backprop implementation; the direct hands-on path into this concept
- [[attention-mechanism]] — attention layers have their own gradients; understanding backprop helps you reason about why attention is sometimes hard to train
