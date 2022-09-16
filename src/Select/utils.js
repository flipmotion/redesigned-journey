const addDepth = (depth = 0) => ({ children = [], ...o }) => ({
  depth,
  ...o,
  children: children.map(addDepth(depth + 1)),
})

const flattenOptions = data => {
  return data.reduce((result, next) => {
    result.push(next);

    if (next.children) {
      const reachedChildren = next.children.map(child => ({
        ...child,
        parendId: next.id,
      }))
      result = result.concat(
        flattenOptions(reachedChildren)
      );
    }

    return result.map(({children, ...rest}) => rest);
  }, []);
}

export const prepareOptions = data => flattenOptions(addDepth()({children: data}).children);
