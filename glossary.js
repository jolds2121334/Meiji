const words = {
    "immersive": {
        "definition": "Providing, involving, or characterized by deep absorption or immersion in something.",
        "context": "The immersive learning experience allowed students to fully engage with the material."
    },
    "foster": {
        "definition": "Encourage or promote the development of something.",
        "context": "The course aims to foster an understanding of sustainable practices."
    },
    "holistic": {
        "definition": "Relating to or concerned with complete systems rather than with individual parts.",
        "context": "A holistic approach is essential for sustainable development."
    },
    "proactive": {
        "definition": "Creating or controlling a situation by causing something to happen rather than responding to it after it has happened.",
        "context": "Proactive measures are needed to address environmental issues."
    },
    "actionable": {
        "definition": "Able to be done or acted on; having practical value.",
        "context": "The course provides actionable strategies for environmental leadership."
    },
    "intersection": {
        "definition": "A point at which two or more things intersect, especially roads.",
        "context": "Understanding the intersection of business and environmental sustainability is key."
    },
    "infrastructure": {
        "definition": "The basic physical and organizational structures and facilities needed for the operation of a society or enterprise.",
        "context": "Sustainable infrastructure is crucial for achieving the SDGs."
    },
    "align": {
        "definition": "Place or arrange things in a straight line.",
        "context": "Organizations should align their practices with sustainable goals."
    },
    "comprehensive": {
        "definition": "Complete and including all or nearly all elements or aspects of something.",
        "context": "The course offers a comprehensive exploration of environmental management."
    },
    "reflection": {
        "definition": "Serious thought or consideration.",
        "context": "Reflection activities help deepen understanding of the material."
    },
    "self-awareness": {
        "definition": "Conscious knowledge of one's own character and feelings.",
        "context": "Self-awareness is crucial for effective environmental leadership."
    },
    "integrate": {
        "definition": "Combine one thing with another so that they become a whole.",
        "context": "Integrating sustainability into business operations is essential."
    },
    "seamless": {
        "definition": "Smooth and continuous, with no apparent gaps or spaces between one part and the next.",
        "context": "The online platform allows for seamless engagement in the course."
    },
    "collaborative": {
        "definition": "Produced or conducted by two or more parties working together.",
        "context": "Collaborative projects are a key part of the course."
    },
    "efficiency": {
        "definition": "The state or quality of being efficient.",
        "context": "Innovative construction methods can improve efficiency."
    },
    "innovation": {
        "definition": "The action or process of innovating.",
        "context": "Innovation in environmental management is essential for sustainability."
    },
    "environmental aspect impact assessment": {
        "definition": "The process of identifying and evaluating the environmental effects of an organization's activities.",
        "context": "Conducting an environmental aspect impact assessment is a key part of the ISO 14001 framework."
    },
    "decarbonization": {
        "definition": "The reduction of carbon dioxide emissions through the use of low carbon power sources.",
        "context": "Financial pathways to decarbonization were discussed in the guest lecture."
    },
    "leverage": {
        "definition": "Use something to maximum advantage.",
        "context": "Organizations can leverage green finance to support sustainable initiatives."
    },
    "urban metabolism": {
        "definition": "The sum total of the technical and socio-economic processes that occur in cities, resulting in growth, production of energy, and elimination of waste.",
        "context": "Urban metabolism helps in understanding the resource flow in cities."
    },
    "asset management": {
        "definition": "The process of developing, operating, maintaining, and selling assets in a cost-effective manner.",
        "context": "Effective asset management is crucial for sustainable infrastructure."
    },
    "resilient": {
        "definition": "Able to withstand or recover quickly from difficult conditions.",
        "context": "Resilient infrastructure is essential for sustainable cities."
    },
    "agglomeration": {
        "definition": "A mass or collection of things; an assemblage.",
        "context": "Urban agglomeration poses challenges for sustainable planning."
    },
    "consensus": {
        "definition": "General agreement.",
        "context": "Reaching a consensus on environmental policies can be challenging."
    }
};

const glossaryList = document.getElementById('glossary-list');
for (const [word, details] of Object.entries(words)) {
    const listItem = document.createElement('li');
    listItem.innerHTML = `<strong>${word}</strong>: ${details.definition}`;
    glossaryList.appendChild(listItem);
}
