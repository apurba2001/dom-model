const doc = document
const html = doc.documentElement
const head = doc.head
const body = doc.body
const span = body.getElementsByTagName("span")
const p = body.getElementsByTagName("p")
const div = body.getElementsByTagName("div")
const h2 = div.getElementsByTagName("h2")

/*
The root node <html> is the parent node of both the head and body nodes.
The head and body nodes are sibling nodes.
The body node is the parent node of the span, p, and div nodes.
The h1 and p nodes are sibling nodes.
The div node is the parent node of the h2 node.
 */