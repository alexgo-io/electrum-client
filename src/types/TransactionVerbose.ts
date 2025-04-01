export type ScriptSig = {
	asm: string;
	hex: string;
};

export type Vin = {
	txid: string;
	vout: number;
	scriptSig: ScriptSig;
	sequence: number;
};

export type ScriptPubKey = {
	asm: string;
	desc: string;
	hex: string;
	address: string;
	type: string;
};

export type Vout = {
	value: number;
	n: number;
	scriptPubKey: ScriptPubKey;
};

export type TransactionVerbose = {
	txid: string;
	hash: string;
	version: number;
	size: number;
	vsize: number;
	weight: number;
	locktime: number;
	vin: Vin[];
	vout: Vout[];
	hex: string;
	blockhash: string;
	confirmations: number;
	time: number;
	blocktime: number;
};
