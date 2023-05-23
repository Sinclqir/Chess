import { Board } from "./models/Board";
import { Pawn } from "./models/Pawn";
import { Piece } from "./models/Piece";
import { Position } from "./models/Position";
import { PieceType, TeamType } from "./models/Types";

export const VERTICAL_AXIS = ["1", "2", "3", "4", "5", "6", "7", "8"];
export const HORIZONTAL_AXIS = ["a", "b", "c", "d", "e", "f", "g", "h"];

export const GRID_SIZE = 100;

export const initialBoard: Board = new Board([
  new Piece(
    0,
  new Position(0, 7), 
  PieceType.ROOK, 
  TeamType.OPPONENT,
  false),
  new Piece(
    1,
  new Position(1, 7),
  PieceType.KNIGHT,
  TeamType.OPPONENT,
  false),
  new Piece(
    2,
  new Position(2, 7),
  PieceType.BISHOP,
  TeamType.OPPONENT,
  false),
  new Piece(
    3,
  new Position(3, 7),
  PieceType.QUEEN,
  TeamType.OPPONENT,
  false),
  new Piece(
    4,
  new Position(4, 7),
  PieceType.KING,
  TeamType.OPPONENT,
  false),
  new Piece(
    5,
  new Position(5, 7),
  PieceType.BISHOP,
  TeamType.OPPONENT,
  false),
  new Piece(
    6,
  new Position(6, 7),
  PieceType.KNIGHT,
  TeamType.OPPONENT,
  false),
  new Piece(
    7,
  new Position(7, 7),
  PieceType.ROOK,
  TeamType.OPPONENT,
  false),
  new Pawn(
    8,
  new Position(0, 6),
  TeamType.OPPONENT,
  false),
  new Pawn(
    9,
  new Position(1, 6),
  TeamType.OPPONENT,
  false),
  new Pawn(
    10,
  new Position(2, 6),
  TeamType.OPPONENT,
  false),
  new Pawn(
    11,
  new Position(3, 6),
  TeamType.OPPONENT,
  false),
  new Pawn(
    12,
  new Position(4, 6),
  TeamType.OPPONENT,
  false),
  new Pawn(
    13,
  new Position(5, 6),
  TeamType.OPPONENT,
  false),
  new Pawn(
    14,
  new Position(6, 6),
  TeamType.OPPONENT,
  false),
  new Pawn(
    15,
  new Position(7, 6),
  TeamType.OPPONENT,
  false),

  new Piece( 
    16,
  new Position(0, 0), 
  PieceType.ROOK, 
  TeamType.OUR,
  false),
  new Piece(
    17,
  new Position(1, 0),
  PieceType.KNIGHT,
  TeamType.OUR,
  false),
  new Piece(
    18,
  new Position(2, 0),
  PieceType.BISHOP,
  TeamType.OUR,
  false),
  new Piece(
    19,
  new Position(3, 0),
  PieceType.QUEEN,
  TeamType.OUR,
  false),
  new Piece(
    20,
  new Position(4, 0),
  PieceType.KING,
  TeamType.OUR,
  false),
  new Piece(
    21,
  new Position(5, 0),
  PieceType.BISHOP,
  TeamType.OUR,
  false),
  new Piece(
    22,
  new Position(6, 0),
  PieceType.KNIGHT,
  TeamType.OUR,
  false),
  new Piece(
    23,
  new Position(7, 0),
  PieceType.ROOK,
  TeamType.OUR,
  false),
  new Pawn(
    24,
  new Position(0, 1),
  TeamType.OUR,
  false),
  new Pawn(
    25,
  new Position(1, 1),
  TeamType.OUR,
  false),
  new Pawn(
    26,
  new Position(2, 1),
  TeamType.OUR,
  false),
  new Pawn(
    27,
  new Position(3, 1),
  TeamType.OUR,
  false),
  new Pawn(
    28,
  new Position(4, 1),
  TeamType.OUR,
  false),
  new Pawn(
    29,
  new Position(5, 1),
  TeamType.OUR,
  false),
  new Pawn(
    30,
  new Position(6, 1),
  TeamType.OUR,
  false),
  new Pawn(
    31,
  new Position(7, 1),
  TeamType.OUR,
  false),
], 1);
export let currentBoard: Board | null = null;

initialBoard.calculateAllMoves();