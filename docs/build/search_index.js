var documenterSearchIndex = {"docs":
[{"location":"#","page":"-","title":"-","text":"DocTestSetup = quote\n    using Yao, YaoBase, YaoBlocks, YaoArrayRegister\nend","category":"page"},{"location":"#","page":"-","title":"-","text":"Modules = [YaoBlocks]","category":"page"},{"location":"#YaoBlocks.AbstractBlock","page":"-","title":"YaoBlocks.AbstractBlock","text":"AbstractBlock\n\nAbstract type for quantum circuit blocks.\n\n\n\n\n\n","category":"type"},{"location":"#YaoBlocks.AbstractContainer","page":"-","title":"YaoBlocks.AbstractContainer","text":"AbstractContainer{BT, N, T} <: CompositeBlock{N, T}\n\nAbstract type for container block. Container blocks are blocks contain a single block. Container block should have a\n\n\n\n\n\n","category":"type"},{"location":"#YaoBlocks.CacheFragment","page":"-","title":"YaoBlocks.CacheFragment","text":"CacheFragment{BT, K, MT}\n\nA fragment that will be stored for each cached block (of type BT) on a cache server.\n\n\n\n\n\n","category":"type"},{"location":"#YaoBlocks.CachedBlock","page":"-","title":"YaoBlocks.CachedBlock","text":"CachedBlock{ST, BT, N, T} <: TagBlock{BT, N, T}\n\nA label type that tags an instance of type BT. It forwards every methods of the block it contains, except mat and apply!, it will cache the matrix form whenever the program has.\n\n\n\n\n\n","category":"type"},{"location":"#YaoBlocks.ChainBlock","page":"-","title":"YaoBlocks.ChainBlock","text":"ChainBlock{N, T} <: CompositeBlock{N, T}\n\nChainBlock is a basic construct tool to create user defined blocks horizontically. It is a Vector like composite type.\n\n\n\n\n\n","category":"type"},{"location":"#YaoBlocks.CompositeBlock","page":"-","title":"YaoBlocks.CompositeBlock","text":"CompositeBlock{N, T} <: AbstractBlock{N, T}\n\nAbstract supertype which composite blocks will inherit from. Composite blocks are blocks composited from other AbstractBlocks, thus it is a AbstractBlock as well.\n\n\n\n\n\n","category":"type"},{"location":"#YaoBlocks.Concentrator","page":"-","title":"YaoBlocks.Concentrator","text":"Concentrator{N, T, BT <: AbstractBlock} <: AbstractContainer{BT, N, T}\n\nconcentrates serveral lines together in the circuit, and expose it to other blocks.\n\n\n\n\n\n","category":"type"},{"location":"#YaoBlocks.Daggered","page":"-","title":"YaoBlocks.Daggered","text":"Daggered{N, T, BT} <: TagBlock{N, T}\n\nWrapper block allowing to execute the inverse of a block of quantum circuit.\n\n\n\n\n\n","category":"type"},{"location":"#YaoBlocks.GeneralMatrixBlock","page":"-","title":"YaoBlocks.GeneralMatrixBlock","text":"GeneralMatrixBlock{M, N, T, MT} <: PrimitiveBlock{N, T}\n\nGeneral matrix gate wraps a matrix operator to quantum gates. This is the most general form of a quantum gate. M is the hilbert dimension (first dimension), N is the hilbert dimension (second dimension) of current quantum state. For most quantum gates, we have M = N.\n\n\n\n\n\n","category":"type"},{"location":"#YaoBlocks.KronBlock","page":"-","title":"YaoBlocks.KronBlock","text":"KronBlock{N, T, MT<:AbstractBlock} <: CompositeBlock{N, T}\n\ncomposite block that combine blocks by kronecker product.\n\n\n\n\n\n","category":"type"},{"location":"#YaoBlocks.Measure","page":"-","title":"YaoBlocks.Measure","text":"Measure{N, K, OT} <: PrimitiveBlock{N, Bool}\nMeasure(n::Int; operator=ComputationalBasis(), locs=1:n, collapseto=nothing, remove=false)\n\nMeasure operator.\n\n\n\n\n\n","category":"type"},{"location":"#YaoBlocks.PhaseGate","page":"-","title":"YaoBlocks.PhaseGate","text":"PhiGate\n\nGlobal phase gate.\n\n\n\n\n\n","category":"type"},{"location":"#YaoBlocks.PrimitiveBlock","page":"-","title":"YaoBlocks.PrimitiveBlock","text":"PrimitiveBlock{N, T} <: AbstractBlock{N, T}\n\nAbstract type that all primitive block will subtype from. A primitive block is a concrete block who can not be decomposed into other blocks. All composite block can be decomposed into several primitive blocks.\n\nnote: Note\nsubtype for primitive block with parameter should implement hash and == method to enable key value cache.\n\n\n\n\n\n","category":"type"},{"location":"#YaoBlocks.PutBlock","page":"-","title":"YaoBlocks.PutBlock","text":"PutBlock <: AbstractContainer\n\nType for putting a block at given locations.\n\n\n\n\n\n","category":"type"},{"location":"#YaoBlocks.ReflectGate","page":"-","title":"YaoBlocks.ReflectGate","text":"ReflectGate{N, T, Tr} <: PrimitiveBlock{N, T}\n\nReflection operator to target state psi.\n\nDefinition\n\nψ  2 ss - 1\n\n\n\n\n\n","category":"type"},{"location":"#YaoBlocks.ReflectGate-Tuple{AbstractArray{#s13,1} where #s13<:Complex}","page":"-","title":"YaoBlocks.ReflectGate","text":"ReflectGate(r::AbstractVector)\n\nCreate a ReflectGate with a quantum state vector v.\n\n\n\n\n\n","category":"method"},{"location":"#YaoBlocks.ReflectGate-Union{Tuple{ArrayReg{1,T,MT} where MT<:AbstractArray{T,2}}, Tuple{T}} where T","page":"-","title":"YaoBlocks.ReflectGate","text":"ReflectGate(r::ArrayReg{1})\n\nCreate a ReflectGate with a quantum register r.\n\n\n\n\n\n","category":"method"},{"location":"#YaoBlocks.RepeatedBlock","page":"-","title":"YaoBlocks.RepeatedBlock","text":"RepeatedBlock <: AbstractContainer\n\nRepeat the same block on given locations.\n\n\n\n\n\n","category":"type"},{"location":"#YaoBlocks.Roller","page":"-","title":"YaoBlocks.Roller","text":"Roller{N, T, BT <: Tuple} <: CompositeBlock{N, T}\n\nRoller block.\n\n\n\n\n\n","category":"type"},{"location":"#YaoBlocks.RotationGate","page":"-","title":"YaoBlocks.RotationGate","text":"RotationGate{N, T, GT <: AbstractBlock{N, Complex{T}}} <: PrimitiveBlock{N, Complex{T}}\n\nRotationGate, with GT both hermitian and isreflexive.\n\n\n\n\n\n","category":"type"},{"location":"#YaoBlocks.ShiftGate","page":"-","title":"YaoBlocks.ShiftGate","text":"ShiftGate <: PrimitiveBlock\n\nPhase shift gate.\n\n\n\n\n\n","category":"type"},{"location":"#YaoBlocks.TagBlock","page":"-","title":"YaoBlocks.TagBlock","text":"TagBlock{BT, N, T} <: AbstractContainer{BT, N, T}\n\nTagBlock is a special kind of Container block, it forwards most of the methods but tag the block with some extra information.\n\n\n\n\n\n","category":"type"},{"location":"#YaoBlocks.TimeEvolution","page":"-","title":"YaoBlocks.TimeEvolution","text":"TimeEvolution{N, TT, GT} <: PrimitiveBlock{N, ComplexF64}\n\nTimeEvolution, where GT is block type. input matrix should be hermitian.\n\n!!!note:     TimeEvolution contructor check hermicity of the input block by default, but sometimes it can be slow. Turn off the check manually by specifying optional parameter check_hermicity = false.\n\n\n\n\n\n","category":"type"},{"location":"#YaoBlocks.TimeEvolution-Tuple{AbstractBlock,Any}","page":"-","title":"YaoBlocks.TimeEvolution","text":"TimeEvolution(H, dt[; tol::Real=1e-7])\n\nCreate a TimeEvolution block with Hamiltonian H and time step dt. The TimeEvolution block will use Krylove based expv to calculate time propagation.\n\nOptional keywords are tolerance tol (default is 1e-7) TimeEvolution block can also be used for imaginary time evolution if dt is complex.\n\n\n\n\n\n","category":"method"},{"location":"#Base.kron-Tuple{Int64,Vararg{Pair{Int64,#s35} where #s35<:AbstractBlock,N} where N}","page":"-","title":"Base.kron","text":"kron(n, blocks::Pair{Int, <:AbstractBlock}...)\n\nReturn a KronBlock, with total number of qubits n and pairs of blocks.\n\nExample\n\nUse kron to construct a KronBlock, it will put an X gate on the 1st qubit, and a Y gate on the 3rd qubit.\n\njulia> kron(4, 1=>X, 3=>Y)\nnqubits: 4, datatype: Complex{Float64}\nkron\n├─ 1=>X gate\n└─ 3=>Y gate\n\n\n\n\n\n\n","category":"method"},{"location":"#Base.kron-Tuple{Vararg{AbstractBlock,N} where N}","page":"-","title":"Base.kron","text":"kron(blocks::AbstractBlock...)\nkron(n, itr)\n\nReturn a KronBlock, with total number of qubits n, and blocks should use all the locations on n wires in quantum circuits.\n\nExample\n\nYou can use kronecker product to composite small blocks to a large blocks.\n\njulia> kron(X, Y, Z, Z)\nnqubits: 4, datatype: Complex{Float64}\nkron\n├─ 1=>X gate\n├─ 2=>Y gate\n├─ 3=>Z gate\n└─ 4=>Z gate\n\n\n\n\n\n\n","category":"method"},{"location":"#Base.kron-Tuple{Vararg{Pair{Int64,#s35} where #s35<:AbstractBlock,N} where N}","page":"-","title":"Base.kron","text":"kron(blocks...) -> f(n)\nkron(itr) -> f(n)\n\nReturn a lambda, which will take the total number of qubits as input.\n\nExample\n\nIf you don't know the number of qubit yet, or you are just too lazy, it is fine.\n\njulia> kron(put(1=>X) for _ in 1:2)\n(n -> kron(n, (n  ->  put(n, 1 => X gate)), (n  ->  put(n, 1 => X gate))))\n\njulia> kron(X for _ in 1:2)\nnqubits: 2, datatype: Complex{Float64}\nkron\n├─ 1=>X gate\n└─ 2=>X gate\n\njulia> kron(1=>X, 3=>Y)\n(n -> kron(n, 1 => X gate, 3 => Y gate))\n\n\n\n\n\n","category":"method"},{"location":"#Base.repeat-Tuple{AbstractBlock,Any}","page":"-","title":"Base.repeat","text":"repeat(x::AbstractBlock, locs)\n\nLazy curried version of repeat.\n\n\n\n\n\n","category":"method"},{"location":"#Base.repeat-Tuple{Int64,AbstractBlock,Vararg{Int64,N} where N}","page":"-","title":"Base.repeat","text":"repeat(n, x::AbstractBlock[, locs]) -> RepeatedBlock{n}\n\nCreate a RepeatedBlock with total number of qubits n and the block to repeat on given location or on all the locations.\n\n\n\n\n\n","category":"method"},{"location":"#YaoBlocks.Rx-Union{Tuple{T}, Tuple{T}} where T<:AbstractFloat","page":"-","title":"YaoBlocks.Rx","text":"Rx(theta)\n\nReturn a RotationGate on X axis.\n\n\n\n\n\n","category":"method"},{"location":"#YaoBlocks.Ry-Union{Tuple{T}, Tuple{T}} where T<:AbstractFloat","page":"-","title":"YaoBlocks.Ry","text":"Ry(theta)\n\nReturn a RotationGate on Y axis.\n\n\n\n\n\n","category":"method"},{"location":"#YaoBlocks.Rz-Union{Tuple{T}, Tuple{T}} where T<:AbstractFloat","page":"-","title":"YaoBlocks.Rz","text":"Rz(theta)\n\nReturn a RotationGate on Z axis.\n\n\n\n\n\n","category":"method"},{"location":"#YaoBlocks.apply!-Tuple{AbstractRegister,AbstractBlock}","page":"-","title":"YaoBlocks.apply!","text":"apply!(register, block)\n\nApply a block (of quantum circuit) to a quantum register.\n\n\n\n\n\n","category":"method"},{"location":"#YaoBlocks.applymatrix-Tuple{AbstractBlock}","page":"-","title":"YaoBlocks.applymatrix","text":"applymatrix(g::AbstractBlock) -> Matrix\n\nTransform the apply! function of specific block to dense matrix.\n\n\n\n\n\n","category":"method"},{"location":"#YaoBlocks.cache_key-Tuple{AbstractBlock}","page":"-","title":"YaoBlocks.cache_key","text":"cache_key(block)\n\nReturns the key that identify the matrix cache of this block. By default, we use the returns of parameters as its key.\n\n\n\n\n\n","category":"method"},{"location":"#YaoBlocks.cache_type-Tuple{Type{#s13} where #s13<:AbstractBlock}","page":"-","title":"YaoBlocks.cache_type","text":"cache_type(::Type) -> DataType\n\nReturn the element type that a CacheFragment will use.\n\n\n\n\n\n","category":"method"},{"location":"#YaoBlocks.chain-Tuple{Int64}","page":"-","title":"YaoBlocks.chain","text":"chain([T=ComplexF64], n)\n\nReturn an empty ChainBlock which can be used like a list of blocks.\n\n\n\n\n\n","category":"method"},{"location":"#YaoBlocks.chain-Tuple{}","page":"-","title":"YaoBlocks.chain","text":"chain()\n\nReturn an lambda n->chain(n).\n\n\n\n\n\n","category":"method"},{"location":"#YaoBlocks.chain-Union{Tuple{Vararg{AbstractBlock{N,T} where T,N1} where N1}, Tuple{N}} where N","page":"-","title":"YaoBlocks.chain","text":"chain(blocks...)\n\nReturn a ChainBlock which chains a list of blocks with same nqubits and datatype. If there is lazy evaluated block in blocks, chain can infer the number of qubits and create an instance itself.\n\n\n\n\n\n","category":"method"},{"location":"#YaoBlocks.chcontent-Tuple{AbstractContainer,Any}","page":"-","title":"YaoBlocks.chcontent","text":"chcontent(x, blk)\n\nCreate a similar block of x and change its content to blk.\n\n\n\n\n\n","category":"method"},{"location":"#YaoBlocks.chsubblocks-Tuple{AbstractBlock,Any}","page":"-","title":"YaoBlocks.chsubblocks","text":"chsubblocks(composite_block, itr)\n\nChange the sub-blocks of a CompositeBlock with given iterator itr.\n\n\n\n\n\n","category":"method"},{"location":"#YaoBlocks.cnot-Tuple{Int64,Any,Int64}","page":"-","title":"YaoBlocks.cnot","text":"cnot(n, ctrl_locs, location)\n\nReturn a speical ControlBlock, aka CNOT gate with number of active qubits n and locs of control qubits ctrl_locs, and location of X gate.\n\nExample\n\njulia> cnot(3, (2, 3), 1)\nnqubits: 3, datatype: Complex{Float64}\ncontrol(2, 3)\n└─ (1,) X gate\n\njulia> cnot(2, 1)\n(n -> cnot(n, 2, 1))\n\n\n\n\n\n","category":"method"},{"location":"#YaoBlocks.collect_blocks-Union{Tuple{T}, Tuple{Type{T},AbstractBlock}} where T<:AbstractBlock","page":"-","title":"YaoBlocks.collect_blocks","text":"collect_blocks(block_type, root)\n\nReturn a ChainBlock with all block of block_type in root.\n\n\n\n\n\n","category":"method"},{"location":"#YaoBlocks.concentrate-Tuple{AbstractBlock,Any}","page":"-","title":"YaoBlocks.concentrate","text":"concentrate(block, locs) -> f(n)\n\nLazy curried version of concentrate.\n\n\n\n\n\n","category":"method"},{"location":"#YaoBlocks.concentrate-Tuple{Int64,AbstractBlock,Any}","page":"-","title":"YaoBlocks.concentrate","text":"concentrate(n, block, locs)\n\nCreate a Concentrator block with total number of current active qubits n, which concentrates given wire location together to length(locs) active qubits, and relax the concentration afterwards.\n\n\n\n\n\n","category":"method"},{"location":"#YaoBlocks.content-Tuple{AbstractContainer}","page":"-","title":"YaoBlocks.content","text":"content(x)\n\nReturns the content of x.\n\n\n\n\n\n","category":"method"},{"location":"#YaoBlocks.control-Tuple{Any,Pair}","page":"-","title":"YaoBlocks.control","text":"control(ctrl_locs, target) -> f(n)\n\nReturn a lambda that takes the number of total active qubits as input. See also control.\n\nExample\n\njulia> control((2, 3), 1=>X)\n(n -> control(n, (2, 3), 1 => X gate))\n\njulia> control(2, 1=>X)\n(n -> control(n, 2, 1 => X gate))\n\n\n\n\n\n","category":"method"},{"location":"#YaoBlocks.control-Tuple{Int64,Any,Pair}","page":"-","title":"YaoBlocks.control","text":"control(n, ctrl_locs, target)\n\nReturn a ControlBlock with number of active qubits n and control locs ctrl_locs, and control target in Pair.\n\nExample\n\njulia> control(4, (1, 2), 3=>X)\nnqubits: 4, datatype: Complex{Float64}\ncontrol(1, 2)\n└─ (3,) X gate\n\njulia> control(4, 1, 3=>X)\nnqubits: 4, datatype: Complex{Float64}\ncontrol(1)\n└─ (3,) X gate\n\n\n\n\n\n","category":"method"},{"location":"#YaoBlocks.control-Tuple{Pair}","page":"-","title":"YaoBlocks.control","text":"control(target) -> f(ctrl_locs)\n\nReturn a lambda that takes a Tuple of control qubits locs as input. See also control.\n\nExample\n\njulia> control(1=>X)\n(ctrl_locs -> control(ctrl_locs, 1 => X gate))\n\njulia> control((2, 3) => ConstGate.CNOT)\n(ctrl_locs -> control(ctrl_locs, (2, 3) => CNOT gate))\n\n\n\n\n\n","category":"method"},{"location":"#YaoBlocks.control-Tuple{Vararg{Int64,N} where N}","page":"-","title":"YaoBlocks.control","text":"control(ctrl_locs::Int...) -> f(target)\n\nReturn a lambda that takes a Pair of control target as input. See also control.\n\nExample\n\njulia> control(1, 2)\n(target -> control((1, 2), target))\n\n\n\n\n\n","category":"method"},{"location":"#YaoBlocks.dispatch!-Tuple{Union{Nothing, Function},AbstractBlock,YaoBlocks.Dispatcher}","page":"-","title":"YaoBlocks.dispatch!","text":"dispatch!(x::AbstractBlock, collection)\n\nDispatch parameters in collection to block tree x.\n\n\n\n\n\n","category":"method"},{"location":"#YaoBlocks.expect-Union{Tuple{B}, Tuple{AbstractBlock,DensityMatrix{B,T,MT} where MT<:AbstractArray{T,3} where T}} where B","page":"-","title":"YaoBlocks.expect","text":"expect(op::AbstractBlock, reg::AbstractRegister{B}) -> Vector\nexpect(op::AbstractBlock, dm::DensityMatrix{B}) -> Vector\n\nexpectation value of an operator.\n\n\n\n\n\n","category":"method"},{"location":"#YaoBlocks.getiparams-Tuple{AbstractBlock}","page":"-","title":"YaoBlocks.getiparams","text":"getiparams(block)\n\nReturns the intrinsic parameters of node block, default is an empty tuple.\n\n\n\n\n\n","category":"method"},{"location":"#YaoBlocks.iparams_eltype-Tuple{AbstractBlock}","page":"-","title":"YaoBlocks.iparams_eltype","text":"iparams_eltype(block)\n\nReturn the element type of getiparams.\n\n\n\n\n\n","category":"method"},{"location":"#YaoBlocks.mat-Tuple{AbstractBlock}","page":"-","title":"YaoBlocks.mat","text":"mat(blk)\n\nReturns the matrix form of given block.\n\n\n\n\n\n","category":"method"},{"location":"#YaoBlocks.matblock-Tuple{AbstractArray{T,2} where T}","page":"-","title":"YaoBlocks.matblock","text":"matblock(m::AbstractMatrix)\n\nCreate a GeneralMatrixBlock with a matrix m.\n\n\n\n\n\n","category":"method"},{"location":"#YaoBlocks.matblock-Tuple{AbstractBlock}","page":"-","title":"YaoBlocks.matblock","text":"matblock(m::AbstractMatrix)\n\nCreate a GeneralMatrixBlock with a matrix m.\n\n\n\n\n\n","category":"method"},{"location":"#YaoBlocks.mathgate-Tuple{Any}","page":"-","title":"YaoBlocks.mathgate","text":"mathgate(f; nbits[, bview=BitBasis.bint])\n\nCreate a MathGate with a math function f and number of bits. You can select different kinds of view which this MathGate will be applied on. Possible values are BitBasis.bint, BitBasis.bint_r, BitBasis.bfloat, BitBasis.bfloat_r.\n\nmathgate(f; bview=BitBasis.bint) -> f(n)\n\nLazy curried version of mathgate.\n\nExample\n\nWe can make a classical toffoli gate on quantum register.\n\njulia> r = ArrayReg(bit\"110\")\nArrayReg{1, Complex{Float64}, Array...}\n    active qubits: 3/3\n\njulia> function toffli(b::BitStr)\n           t = @inbounds b[1] ⊻ (b[3] & b[2])\n           return @inbounds bit_literal(t, b[2], b[3])\n       end\ntoffli (generic function with 1 method)\n\njulia> g = mathgate(toffli; nbits=3)\nmathgate(toffli; nbits=3, bview=bint)\n\njulia> apply!(r, g) == ArrayReg(bit\"111\")\ntrue\n\n\n\n\n\n\n","category":"method"},{"location":"#YaoBlocks.niparams-Tuple{AbstractBlock}","page":"-","title":"YaoBlocks.niparams","text":"nparameters(block) -> Int\n\nReturn number of parameters in block. See also nparameters.\n\n\n\n\n\n","category":"method"},{"location":"#YaoBlocks.occupied_locs-Tuple{AbstractBlock}","page":"-","title":"YaoBlocks.occupied_locs","text":"occupied_locs(x)\n\nReturn an iterator of occupied locations of x.\n\n\n\n\n\n","category":"method"},{"location":"#YaoBlocks.parameters!-Tuple{Any,AbstractBlock}","page":"-","title":"YaoBlocks.parameters!","text":"parameters!(out, block)\n\nAppend all the parameters contained in block tree with given root block to out.\n\n\n\n\n\n","category":"method"},{"location":"#YaoBlocks.parameters-Tuple{AbstractBlock}","page":"-","title":"YaoBlocks.parameters","text":"parameters(block)\n\nReturns all the parameters contained in block tree with given root block.\n\n\n\n\n\n","category":"method"},{"location":"#YaoBlocks.parameters_eltype-Tuple{AbstractBlock}","page":"-","title":"YaoBlocks.parameters_eltype","text":"parameters_eltype(x)\n\nReturn the element type of parameters.\n\n\n\n\n\n","category":"method"},{"location":"#YaoBlocks.phase-Tuple{AbstractFloat}","page":"-","title":"YaoBlocks.phase","text":"phase(theta)\n\nReturns a global phase gate.\n\n\n\n\n\n","category":"method"},{"location":"#YaoBlocks.popdispatch!-Tuple{AbstractBlock,Array{T,1} where T}","page":"-","title":"YaoBlocks.popdispatch!","text":"popdispatch!(block, list)\n\nPop the first nparameters parameters of list, then dispatch them to the block tree block. See also dispatch!.\n\n\n\n\n\n","category":"method"},{"location":"#YaoBlocks.popdispatch!-Tuple{Function,AbstractBlock,Array{T,1} where T}","page":"-","title":"YaoBlocks.popdispatch!","text":"popdispatch!(f, block, list)\n\nPop the first nparameters parameters of list, map them with a function f, then dispatch them to the block tree block. See also dispatch!.\n\n\n\n\n\n","category":"method"},{"location":"#YaoBlocks.postwalk-Tuple{Union{Function, Type},AbstractBlock}","page":"-","title":"YaoBlocks.postwalk","text":"postwalk(f, src::AbstractBlock)\n\nWalk the tree and call f after the children are visited.\n\n\n\n\n\n","category":"method"},{"location":"#YaoBlocks.prewalk-Tuple{Union{Function, Type},AbstractBlock}","page":"-","title":"YaoBlocks.prewalk","text":"prewalk(f, src::AbstractBlock)\n\nWalk the tree and call f once the node is visited.\n\n\n\n\n\n","category":"method"},{"location":"#YaoBlocks.print_tree","page":"-","title":"YaoBlocks.print_tree","text":"print_tree(io, root, node[, depth=1, active_levels=()]; kwargs...)\n\nPrint the block tree.\n\nKeywords\n\nmaxdepth: max tree depth to print\ncharset: default is ('├','└','│','─'). See also BlockTreeCharSet.\ntitle: control whether to print the title, true or false, default is true\n\n\n\n\n\n","category":"function"},{"location":"#YaoBlocks.print_tree-Tuple{Any}","page":"-","title":"YaoBlocks.print_tree","text":"print_tree([io=stdout], root)\n\nPrint the block tree.\n\n\n\n\n\n","category":"method"},{"location":"#YaoBlocks.projector-Tuple{Any}","page":"-","title":"YaoBlocks.projector","text":"projector(x)\n\nReturn projector on 0 or projector on 1.\n\n\n\n\n\n","category":"method"},{"location":"#YaoBlocks.put-Tuple{Pair}","page":"-","title":"YaoBlocks.put","text":"put(pair) -> f(n)\n\nLazy curried version of put.\n\n\n\n\n\n","category":"method"},{"location":"#YaoBlocks.put-Union{Tuple{M}, Tuple{Int64,Pair{Tuple{Vararg{Int64,M}},#s35} where #s35<:AbstractBlock}} where M","page":"-","title":"YaoBlocks.put","text":"put(total::Int, pair)\n\nCreate a PutBlock with total number of active qubits, and a pair of location and block to put on.\n\n\n\n\n\n","category":"method"},{"location":"#YaoBlocks.reflect-Tuple{AbstractArray{#s13,1} where #s13<:Complex}","page":"-","title":"YaoBlocks.reflect","text":"reflect(v::AbstractVector{<:Complex})\n\nCreate a ReflectGate with an quantum state vector v.\n\n\n\n\n\n","category":"method"},{"location":"#YaoBlocks.reflect-Tuple{ArrayReg}","page":"-","title":"YaoBlocks.reflect","text":"reflect(r::ArrayReg)\n\nCreate a ReflectGate with an ArrayReg.\n\n\n\n\n\n","category":"method"},{"location":"#YaoBlocks.roll-Tuple{Int64,Vararg{Any,N} where N}","page":"-","title":"YaoBlocks.roll","text":"roll(n, blocks...)\n\nReturn a Roller with total number of active qubits.\n\n\n\n\n\n","category":"method"},{"location":"#YaoBlocks.rot-Tuple{AbstractBlock,Any}","page":"-","title":"YaoBlocks.rot","text":"rot(U, theta)\n\nReturn a RotationGate on U axis.\n\n\n\n\n\n","category":"method"},{"location":"#YaoBlocks.setiparams!-Tuple{AbstractBlock,Vararg{Any,N} where N}","page":"-","title":"YaoBlocks.setiparams!","text":"setiparams!(block, itr)\nsetiparams!(block, params...)\n\nSet the parameters of block.\n\n\n\n\n\n","category":"method"},{"location":"#YaoBlocks.setiparams!-Tuple{Function,AbstractBlock,Any}","page":"-","title":"YaoBlocks.setiparams!","text":"setiparams(f, block, collection)\n\nSet parameters of block to the value in collection mapped by f.\n\n\n\n\n\n","category":"method"},{"location":"#YaoBlocks.setiparams!-Tuple{Function,AbstractBlock,Symbol}","page":"-","title":"YaoBlocks.setiparams!","text":"setiparams(f, block, symbol)\n\nSet the parameters to a given symbol, which can be :zero, :random.\n\n\n\n\n\n","category":"method"},{"location":"#YaoBlocks.shift-Tuple{AbstractFloat}","page":"-","title":"YaoBlocks.shift","text":"shift(θ)\n\nReturns a shift gate.\n\n\n\n\n\n","category":"method"},{"location":"#YaoBlocks.simplify-Tuple{AbstractBlock}","page":"-","title":"YaoBlocks.simplify","text":"simplify(block[; rules=__default_simplification_rules__])\n\nSimplify a block tree accroding to given rules, default to use __default_simplification_rules__.\n\n\n\n\n\n","category":"method"},{"location":"#YaoBlocks.subblocks-Tuple{AbstractBlock}","page":"-","title":"YaoBlocks.subblocks","text":"subblocks(x)\n\nReturns an iterator of the sub-blocks of a composite block. Default is empty.\n\n\n\n\n\n","category":"method"},{"location":"#YaoBlocks.swap-Tuple{Int64,Int64,Int64}","page":"-","title":"YaoBlocks.swap","text":"swap([T=ComplexF64], n, loc1, loc2)\n\nReturn a n-qubit Swap gate which swap loc1 and loc2.\n\n\n\n\n\n","category":"method"},{"location":"#YaoBlocks.swap-Tuple{Int64,Int64}","page":"-","title":"YaoBlocks.swap","text":"swap(loc1, loc2) -> f(n)\n\nReturn a lambda that takes the total number of active qubits as input. See also swap, Swap.\n\n\n\n\n\n","category":"method"},{"location":"#YaoBlocks.@mathgate","page":"-","title":"YaoBlocks.@mathgate","text":"@mathgate f <nbits> <bview=bint>\n\nCreate a MathGate with a math function f and number of bits nbits, binary view bview. Unlike mathgate, f will be automatically converted to a more legible form.\n\nExample\n\njulia> @mathgate x->x + 0b11 nbits=4\nmathgate((x -> x + 0x03); nbits=4, bview=bint)\n\n\n\n\n\n","category":"macro"},{"location":"#YaoBlocks.HasParameters","page":"-","title":"YaoBlocks.HasParameters","text":"HasParameters{X} <: SimpleTraits.Trait\n\nTrait that block X has parameters.\n\n\n\n\n\n","category":"type"},{"location":"#Base.:|>-Tuple{AbstractRegister,AbstractBlock}","page":"-","title":"Base.:|>","text":"|>(register, blk)\n\nPipe operator for quantum circuits.\n\nExample\n\njulia> ArrayReg(bit\"0\") |> X |> Y\n\nwarning: Warning\n|> is equivalent to apply!, which means it has side effects. You need to copy original register, if you do not want to change it in-place.\n\n\n\n\n\n","category":"method"},{"location":"#LinearAlgebra.opnorm","page":"-","title":"LinearAlgebra.opnorm","text":"opnorm(A::BlockMap, p::Real=2)\n\nopnorm for quantum circuit blocks.\n\n\n\n\n\n","category":"function"},{"location":"#YaoBlocks.cunmat","page":"-","title":"YaoBlocks.cunmat","text":"cunmat(nbit::Int, cbits::NTuple{C, Int}, cvals::NTuple{C, Int}, U0::AbstractMatrix, locs::NTuple{M, Int}) where {C, M} -> AbstractMatrix\n\ncontrol-unitary matrix\n\n\n\n\n\n","category":"function"},{"location":"#YaoBlocks.decode_sign-Tuple{Vararg{Int64,N} where N}","page":"-","title":"YaoBlocks.decode_sign","text":"decode_sign(ctrls...)\n\nDecode signs into control sequence on control or inversed control.\n\n\n\n\n\n","category":"method"},{"location":"#YaoBlocks.getcol-Tuple{Union{SparseMatrixCSC{Tv,Ti}, SSparseMatrixCSC{Tv,Ti,NNZ,NP} where NP where NNZ} where Ti where Tv,Int64}","page":"-","title":"YaoBlocks.getcol","text":"getcol(csc::SDparseMatrixCSC, icol::Int) -> (View, View)\n\nget specific col of a CSC matrix, returns a slice of (rowval, nzval)\n\n\n\n\n\n","category":"method"},{"location":"#YaoBlocks.print_annotation-Tuple{IO,Any,Any,Any,Any}","page":"-","title":"YaoBlocks.print_annotation","text":"print_annotation(io, root, node, child, k)\n\nPrint the annotation of k-th child of node, aka the k-th element of subblocks(node).\n\n\n\n\n\n","category":"method"},{"location":"#YaoBlocks.print_prefix-Tuple{IO,Any,Any,Any}","page":"-","title":"YaoBlocks.print_prefix","text":"print_prefix(io, depth, charset, active_levels)\n\nprint prefix of a tree node in a single line.\n\n\n\n\n\n","category":"method"},{"location":"#YaoBlocks.print_title-Tuple{IO,AbstractBlock}","page":"-","title":"YaoBlocks.print_title","text":"print_title(io, block)\n\nPrint the title of given block of an AbstractBlock.\n\n\n\n\n\n","category":"method"},{"location":"#YaoBlocks.setcol!-Tuple{SparseArrays.SparseMatrixCSC,Int64,AbstractArray{T,1} where T,Any}","page":"-","title":"YaoBlocks.setcol!","text":"setcol!(csc::SparseMatrixCSC, icol::Int, rowval::AbstractVector, nzval) -> SparseMatrixCSC\n\nset specific col of a CSC matrix\n\n\n\n\n\n","category":"method"},{"location":"#YaoBlocks.u1ij!","page":"-","title":"YaoBlocks.u1ij!","text":"u1ij!(target, i, j, a, b, c, d)\n\nsingle u1 matrix into a target matrix.\n\nnote: Note\nFor coo, we take an additional parameter     * ptr: starting position to store new data.\n\n\n\n\n\n","category":"function"},{"location":"#YaoBlocks.unmat-Tuple{Int64,AbstractArray{T,2} where T,Tuple{Vararg{T,N}} where T where N}","page":"-","title":"YaoBlocks.unmat","text":"unmat(nbit::Int, U::AbstractMatrix, locs::NTuple) -> AbstractMatrix\n\nReturn the matrix representation of putting matrix at locs.\n\n\n\n\n\n","category":"method"}]
}
