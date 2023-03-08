/*
 * @Author      : linye
 * @Created At  : 2022-08-24 11:32:54
 * @Description : 558
 * https://leetcode.cn/problems/logical-or-of-two-binary-grids-represented-as-quad-trees/
 */


// Definition for a QuadTree node.
function Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
   this.val = val;
   this.isLeaf = isLeaf;
   this.topLeft = topLeft || null;
   this.topRight = topRight || null;
   this.bottomLeft = bottomLeft || null;
   this.bottomRight = bottomRight || null;;
};

/**
 * @param {Node} quadTree1
 * @param {Node} quadTree2
 * @return {Node}
 */

const keys = ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'];

var get = function(nd, position) {
  if (nd[position]) return nd[position];
  return new Node(nd.val, true);
};

var intersect = function(quadTree1, quadTree2) {
  function inner(t1, t2) {
    if (!t1 && !t2) return null;
    if (!t1 || !t2) return t1 || t2;
    if (t1.isLeaf && t1.val === 1) return t1;
    if (t2.isLeaf && t2.val === 1) return t2;
    if (t1.isLeaf && t2.isLeaf) {
      return new Node(t1.val || t2.val, true);
    }
    const tree = new Node(0, false);
    keys.forEach(key => {
      tree[key] = inner(get(t1, key), get(t2, key));
    });
    const [v1, v2, v3, v4] = keys.map(key => tree[key].val);
    if (
      v1 === v2 && v1 === v3 && v1 === v4 &&
      keys.every(key => tree[key].isLeaf)
    ) return new Node(v1, true);
    return tree;
  }
  return inner(quadTree1, quadTree2);
};

const t1 = {
  val: 1,
  isLeaf: false,
  topLeft: {
    isLeaf: true,
    val: 1
  },
  topRight: {
    isLeaf: true,
    val: 1
  },
  bottomLeft: {
    isLeaf: true,
    val: 0
  },
  bottomRight: {
    isLeaf: true,
    val: 0
  },
}
const t2 = {
  val: 1,
  isLeaf: false,
  topLeft: {
    isLeaf: true,
    val: 1
  },
  topRight: {
    isLeaf: false,
    val: 1,
    topLeft: {
      isLeaf: true,
      val: 0
    },
    topRight: {
      isLeaf: true,
      val: 0
    },
    bottomLeft: {
      isLeaf: true,
      val: 1
    },
    bottomRight: {
      isLeaf: true,
      val: 1
    },
  },
  bottomLeft: {
    isLeaf: true,
    val: 1
  },
  bottomRight: {
    isLeaf: true,
    val: 0
  },
}

console.log(intersect(t1, t2));
